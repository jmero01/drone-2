import Link from "next/link"
import { Card, CardContent, CardFooter } from "../ui/card"
import Image from "next/image"
import { Media } from "@/types";
import { Button } from "../ui/button";

type ProductCardProps = {
    data: Media;
}

export  const ProductCard = ({data} : ProductCardProps) => {
  return (
    <div>
        <Link href="/" className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
            <Card className="rounded-lg border-2">
                <CardContent className="pt-4">
                    <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
                        <Image
                        src={data.images?.[0]}
                        alt={data.name}
                        fill
                        className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-start">
                    <div>
                        <p className="font-semibold text-lg">{data.id}  {data.name}</p>
                        <p className="text-sm text-primary/80">{data.category}</p>
                    </div>
                    <div className="flex items-center justify-center">${data?.price} NZD</div>
                    <div className="flex text-center items-center justify-center ">
                        <Button className=" items-center justify-center">
                            Buy Now
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    </div>
  )
}
