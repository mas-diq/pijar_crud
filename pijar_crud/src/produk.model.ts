import * as mongoose from 'mongoose';

export const ProdukModel = new mongoose.Schema({
    nama_produk: String,
    keterangan: String,
    harga: Number,
    jumlah: Number,
});

export interface ProdukModel extends mongoose.Document {
    nama_produk: string;
    keterangan: string;
    harga: number;
    jumlah: number;
}