import { NextPage } from "next";
import React from "react";

interface ReviewProductPageProps {
  params: { id: string };
}

const ReviewProductPage: NextPage<ReviewProductPageProps> = ({
  params: { id },
}) => {
  return <div>ReviewProduct</div>;
};

export default ReviewProductPage;
