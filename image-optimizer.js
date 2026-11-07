/**
 * Reduce image transfer/storage cost before uploading to Supabase.
 * No external service is used. Animated GIF and SVG are passed through untouched.
 * Returns the original file if conversion is unsupported, fails, or makes it larger.
 */
const COMPRESSIBLE_TYPES=new Set(["image/jpeg","image/png","image/webp"]);
export async function optimizeUploadImage(file,{maxDimension=1600,quality=0.82}={}){
  if(!(file instanceof File)||!COMPRESSIBLE_TYPES.has(file.type))return file;
  if(typeof document==="undefined"||typeof URL==="undefined")return file;
  let bitmap=null,objectUrl=null;
  try{
    let width,height,source;
    if(typeof createImageBitmap==="function"){
      bitmap=await createImageBitmap(file,{imageOrientation:"from-image"});
      width=bitmap.width;height=bitmap.height;source=bitmap;
    }else{
      objectUrl=URL.createObjectURL(file);
      const img=new Image();
      img.decoding="async";
      img.src=objectUrl;
      await img.decode();
      width=img.naturalWidth;height=img.naturalHeight;source=img;
    }
    if(!width||!height||width*height>80000000) return file;
    const ratio=Math.min(1,maxDimension/Math.max(width,height));
    const canvas=document.createElement("canvas");
    canvas.width=Math.max(1,Math.round(width*ratio));
    canvas.height=Math.max(1,Math.round(height*ratio));
    const ctx=canvas.getContext("2d",{alpha:true});
    if(!ctx)return file;
    ctx.imageSmoothingEnabled=true;
    ctx.imageSmoothingQuality="high";
    ctx.drawImage(source,0,0,canvas.width,canvas.height);
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,"image/webp",quality));
    // Preserve the file if WebP encoding is unavailable or savings are negligible.
    if(!blob||blob.type!=="image/webp"||blob.size>=file.size*0.95)return file;
    const baseName=file.name.replace(/\.[^.]+$/,"");
    return new File([blob],baseName+".webp",{type:"image/webp",lastModified:Date.now()});
  }catch(error){
    console.warn("Image optimization skipped:",error);
    return file;
  }finally{
    bitmap?.close?.();
    if(objectUrl)URL.revokeObjectURL(objectUrl);
  }
}
export function optimizedExtension(file){
  return file.type==="image/webp"?"webp":file.type==="image/png"?"png":file.type==="image/jpeg"?"jpg":(file.name.split(".").pop()||"img").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,8)||"img";
}
