import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8">
      <Card onClick={() => navigate("/barber/register")}>
        <CardHeader>
          <CardTitle>
            <StorefrontIcon />
            &nbsp; Tenho uma barbearia
          </CardTitle>
          <CardDescription>Sou profissional e quero cadastrar uma barbearia.</CardDescription>
        </CardHeader>
      </Card>

      <Card onClick={() => navigate("/user/register")}>
        <CardHeader>
          <CardTitle>
            <AccountCircleIcon />
            &nbsp; Sou cliente
          </CardTitle>
          <CardDescription>Sou cliente e quero agendar um horário.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
