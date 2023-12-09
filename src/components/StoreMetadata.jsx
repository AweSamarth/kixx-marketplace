import { NFTStorage } from "nft.storage";

/// used NFT.storage to prepare the metadata for the NFT
export const StoreMetadata = async (Name, Supply, image,Price) => {
  // In case you are using env then uncomment this 
  const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;

  console.log("Preparing Metadata ....");
  const nft = {
    name: Name,
    supply : Supply,
    image: image,
    price: Price,
  };
  console.log("Uploading Metadata to IPFS ....");
  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store(nft);
  console.log(metadata);
  console.log("NFT data stored successfully 🚀🚀");
  console.log("Metadata URI: ", metadata.url);

  return metadata;
};
