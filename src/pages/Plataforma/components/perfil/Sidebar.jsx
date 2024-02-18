import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  HomeIcon,
  ShoppingCartIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Sidebar({ onSelect}) {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('configuracoes');

  const handleItemClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
};

  return (
    <Card className="h-[calc(108vh-5rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Configurações da Conta
        </Typography>
      </div>
      <List className="gap-5">
        <ListItem onClick={() => handleItemClick('configuracoes')} className="gap-2">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 text-secundary" />
          </ListItemPrefix>
          Dados de Cadastro
        </ListItem>
        <ListItem onClick={() => handleItemClick('pedidos')} className="gap-2">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5 text-secundary" />
          </ListItemPrefix>
          Ultimos Pedidos
        </ListItem>
        <ListItem onClick={() => handleItemClick('ajuda')} className="gap-2">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 text-secundary" />
          </ListItemPrefix>
          Ajuda
        </ListItem>
        {/* <ListItem onClick={() => handleItemClick('loja')} className="gap-2">
          <ListItemPrefix>
            <ShoppingCartIcon className="h-5 w-5 text-secundary" />
          </ListItemPrefix>
          Minha Loja
        </ListItem> */}
        <ListItem onClick={() => navigate('/inicio')} className="gap-2">
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5 text-secundary" />
          </ListItemPrefix>
          Voltar
        </ListItem>
      </List>
    </Card>
  );
}