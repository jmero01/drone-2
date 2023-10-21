import { Media } from "@/types";
import { ProductCard } from "./ProductCard";
import { Container } from "../container";

type ProductListProps = {
  media: Media[];
};

export const ProductList = ({ media }: ProductListProps) => {
  return (
    <Container>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.map((media) => (
            <ProductCard key={media.id} data={media} />
          ))}
        </div>
      </div>
    </Container>
  );
};
