import { Copy, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`SKU ${text} copiado`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-primary/20" />
          <span className="text-4xl relative z-10">📦</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-semibold text-sm line-clamp-2 flex-1">
              {product.name}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 shrink-0"
              onClick={() => copyToClipboard(product.sku)}
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {product.sku}
            </Badge>
            <span className="text-xs text-muted-foreground">
              Min. {product.minUnits} uds
            </span>
          </div>
          
          <div className="flex gap-1 flex-wrap">
            {product.colors.slice(0, 4).map((color, idx) => (
              <div
                key={idx}
                className="w-5 h-5 rounded-full border border-border"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1 text-xs">
              <Eye className="h-3 w-3 mr-1" />
              Ver
            </Button>
            <Button size="sm" className="flex-1 text-xs bg-primary hover:bg-primary/90">
              Cotizar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
