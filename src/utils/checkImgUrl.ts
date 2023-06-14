export default function checkImgUrl(url: string) {
  //   const imageUrl = `https://dweb.link/ipfs/`;
  if (!url.includes('http')) {
    return `https://dweb.link/ipfs/${url}`;
  } else return url;
}
