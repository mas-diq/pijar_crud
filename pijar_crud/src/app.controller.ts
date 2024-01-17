import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AppService} from './app.service';
import {CreateProdukDto, UpdateProdukDto} from "./produk.dto";

@Controller('produk')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    findAll() {
        return this.appService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.appService.findOne(id);
    }

    @Post()
    create(@Body() createProdukDto: CreateProdukDto) {
        return this.appService.create(createProdukDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProdukDto: UpdateProdukDto) {
        return this.appService.update(id, updateProdukDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.appService.remove(id);
    }
}
