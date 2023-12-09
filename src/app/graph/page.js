"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { gql } from "@apollo/client";

const query = gql`
query {
  collectionLauncheds(first: 5) {
    id
    _collectionName
    _totalSupplyOfCollection
    _imageUrl
  }
  purchasedFromCollections(first: 5) {
    id
    _buyer
    blockNumber
    blockTimestamp
  }
}
`;

export default function Page() {


  const { data } = useSuspenseQuery(query);
  console.log(data)

  return <main>{"ok"}</main>;
}