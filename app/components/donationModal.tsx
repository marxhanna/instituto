import { useState } from "react";
import { Modal, Input, Select, Button, Form, Divider } from "antd";

const DonationModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [method, setMethod] = useState("pix");
  const [documentType, setDocumentType] = useState("cpf");

  const handleSubmit = (values) => {
    console.log("Doação enviada:", values);
    onClose();
  };

  return (
    <Modal
      title="Faça uma Doação"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Valor da Doação"
          name="valor"
          rules={[{ required: true, message: "Informe o valor da doação" }]}
        >
          <Input type="number" prefix="R$" min={1} />
        </Form.Item>

        <Form.Item label="Método de Pagamento" name="metodo" initialValue={method}>
          <Select onChange={(value) => setMethod(value)}>
            <Select.Option value="pix">PIX</Select.Option>
            <Select.Option value="cartao">Cartão de Crédito</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Documento" name="documento" initialValue={documentType}>
          <Select onChange={(value) => setDocumentType(value)}>
            <Select.Option value="cpf">CPF</Select.Option>
            <Select.Option value="cnpj">CNPJ</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={documentType === "cpf" ? "Número do CPF" : "Número do CNPJ"}
          name="numeroDocumento"
          rules={[{ required: true, message: "Informe seu documento" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Nome Completo" name="nome" rules={[{ required: true }]}> 
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}> 
          <Input />
        </Form.Item>

        <Form.Item label="Celular" name="celular" rules={[{ required: true }]}> 
          <Input />
        </Form.Item>

        {method === "cartao" && (
          <>
            <h1 style={{ fontSize: "18px" }}>Dados do Cartão</h1>
            <Divider />

            <Form.Item label="Número do Cartão" name="numeroCartao" rules={[{ required: true }]}> 
              <Input />
            </Form.Item>

            <Form.Item label="Nome Impresso no Cartão" name="nomeCartao" rules={[{ required: true }]}> 
              <Input />
            </Form.Item>

            <Form.Item label="Mês Validade" name="mesValidade" rules={[{ required: true }]}> 
              <Input maxLength={2} />
            </Form.Item>

            <Form.Item label="Ano Validade" name="anoValidade" rules={[{ required: true }]}> 
              <Input maxLength={4} />
            </Form.Item>

            <Form.Item label="CVV" name="cvv" rules={[{ required: true }]}> 
              <Input maxLength={3} />
            </Form.Item>

            <h1 style={{ fontSize: "18px" }}>Endereço de Cobrança</h1>
            <Divider />
            <Form.Item label="CEP" name="cep" rules={[{ required: true }]}> 
              <Input />
            </Form.Item>

            <Form.Item label="Endereço" name="endereco" rules={[{ required: true }]}> 
              <Input />
            </Form.Item>

            <Form.Item label="Cidade" name="cidade" rules={[{ required: true }]}> 
              <Input />
            </Form.Item>

            <Form.Item label="País" name="pais" rules={[{ required: true }]}> 
              <Input />
            </Form.Item>

            <Form.Item label="UF" name="uf" rules={[{ required: true }]}> 
              <Input maxLength={2} />
            </Form.Item>
          </>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">Confirmar Doação</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DonationModal;
