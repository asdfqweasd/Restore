import { Product } from "../../app/models/products";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
          </ListItem>
        ))}
        <button onClick={addProduct}>Add Product</button>
      </List>
    </>
  );
}
