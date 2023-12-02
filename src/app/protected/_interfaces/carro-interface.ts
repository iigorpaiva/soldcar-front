export interface CarroResponse {
  modelo: string;
  marca: string;
  anoFabricacao: string;
  anoModelo: string;
  cor: string;
  patioId: number;
  caminhoFotos: string;
  fotos: FileList; // FileList é o tipo para lista de arquivos, é semelhante a List<MultipartFile>
}
