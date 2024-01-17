export class CreateProdukDto {
    nama_produk: string;
    keterangan: string;
    harga: number;
    jumlah: number;
}

export class UpdateProdukDto {
    nama_produk?: string;
    keterangan?: string;
    harga?: number;
    jumlah?: number;
}
