import {Injectable} from '@nestjs/common';
import {ProdukModel} from "./produk.model";
import {Model} from 'mongoose';
import {CreateProdukDto, UpdateProdukDto} from "./produk.dto";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class AppService {
    constructor(
        @InjectModel("Produk")
        private readonly produkModel: Model<ProdukModel>) {
    }

    async findAll(): Promise<ProdukModel[]> {
        return this.produkModel.find().exec();
    }

    async findOne(id: string): Promise<ProdukModel> {
        return this.produkModel.findById(id).exec();
    }

    async create(createProdukDto: CreateProdukDto): Promise<ProdukModel> {
        const createdProduk = new this.produkModel(createProdukDto);
        return createdProduk.save();
    }

    async update(id: string, updateProdukDto: UpdateProdukDto): Promise<ProdukModel> {
        return this.produkModel.findByIdAndUpdate(id, updateProdukDto, {new: true});
    }

    async remove(id: string): Promise<ProdukModel> {
        return this.produkModel.findByIdAndDelete(id);
    }
}
