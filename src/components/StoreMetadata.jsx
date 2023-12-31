import { NFTStorage } from "nft.storage";

/// used NFT.storage to prepare the metadata for the NFT
export const StoreMetadata = async (Name, Supply, image,Price) => {
  // In case you are using env then uncomment this 
  const NFT_STORAGE_API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEUxZDQ5RWQyNzg3ODhlZjg2NTgyZEZmMmY0OTNDNmU1NTNFMTYyYzYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMjE0MDEzNTE3NiwibmFtZSI6ImtpeHgifQ.KeCn7d77cV1e769wPpJW8TQLNJ5YkpGt0PEt3Yg0qkE";

  console.log("Preparing Metadata ....");
  const nft = {
    name: Name,
    supply : Supply,
    image: image,
    price: Price,
    description:'kixx',
  };
  console.log("Uploading Metadata to IPFS ....");

  console.log(nft)
  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store(nft);
  console.log(metadata.data.image.href);
  console.log("NFT data stored successfully 🚀🚀");
  console.log("Metadata URI: ", metadata.data.image.href);

  return metadata;
};
