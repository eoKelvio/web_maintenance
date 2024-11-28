"use client";

import React from "react";
import Image from "next/image";

// Dados Mockados
const maintenanceData = [
  {
    id: "1100292511",
    priority: "Alta",
    responsability: "Equipe A",
    solicitation: "2024-05-23",
    status: "Pendente",
    description: "A máquina se encontrar com um problema na mangueira.",
    type: "Corretiva",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: "1100293392",
    priority: "Média",
    responsability: "Equipe B",
    solicitation: "2024-08-01",
    status: "Finalizado",
    description: "A máquina estava com a junta do cabeçote queimada.",
    type: "Preventiva",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: "1100290912",
    priority: "Baixa",
    responsability: "Equipe D",
    solicitation: "2024-08-26",
    status: "Em Andamento",
    description: "A máquina se encontra com uma roda quebrada.",
    type: "Preditiva",
    img: "data:image/jpeg;base64,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",
  },
];

const materialsData = [
  {
    maintenanceId: "1100292511",
    materials: [
      { name: "Mangueira hidráulica", quantity: 2 },
      { name: "Óleo lubrificante", quantity: 1 },
    ],
  },
  {
    maintenanceId: "1100293392",
    materials: [
      { name: "Junta do cabeçote", quantity: 1 },
      { name: "Parafusos", quantity: 8 },
    ],
  },
  {
    maintenanceId: "1100290912",
    materials: [
      { name: "Roda", quantity: 1 },
      { name: "Parafuso de fixação", quantity: 4 },
    ],
  },
];

export default function MaintenanceDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Busca os dados da manutenção
  const maintenance = maintenanceData.find((item) => item.id === id);
  const materials = materialsData.find((item) => item.maintenanceId === id);

  if (!maintenance) {
    return <div>Manutenção não encontrada</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Detalhes da Manutenção</h1>

      {/* Imagem */}
      <div className="mb-4">
        <Image
          src={maintenance.img}
          alt={`Imagem da manutenção ${maintenance.id}`}
          width={256}
          height={256}
          className="w-64 h-64 object-cover rounded-md"
        />
      </div>

      {/* Informações Gerais */}
      <div className="mb-4">
        <p>
          <strong>ID:</strong> {maintenance.id}
        </p>
        <p>
          <strong>Prioridade:</strong> {maintenance.priority}
        </p>
        <p>
          <strong>Responsabilidade:</strong> {maintenance.responsability}
        </p>
        <p>
          <strong>Data da Solicitação:</strong> {maintenance.solicitation}
        </p>
        <p>
          <strong>Status:</strong> {maintenance.status}
        </p>
        <p>
          <strong>Tipo:</strong> {maintenance.type}
        </p>
      </div>

      {/* Descrição */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Descrição</h2>
        <p>{maintenance.description}</p>
      </div>

      {/* Materiais Utilizados */}
      <div>
        <h2 className="text-xl font-bold">Materiais Utilizados</h2>
        {materials ? (
          <ul className="list-disc list-inside">
            {materials.materials.map((material, index) => (
              <li key={index}>
                {material.name} - {material.quantity} unidade(s)
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum material associado.</p>
        )}
      </div>
    </div>
  );
}