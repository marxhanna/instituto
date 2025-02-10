import { Button } from "antd";
import Link from "next/link";

export default function MinhaPagina() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Bem-vindo à nova página!</h1>
      <Button type="primary">
        <Link href="/">Voltar para a Home</Link>
      </Button>
    </div>
  );
}
