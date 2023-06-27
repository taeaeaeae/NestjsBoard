import { Controller, Get, Post, Body } from '@nestjs/common';
import { Delete, Param, Patch } from '@nestjs/common/decorators';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    boardsService: BoardsService;

    constructor(boardsService: BoardsService) {
        this.boardsService = boardsService;
    }//constructor

    @Get()
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }//getAllBoard

    @Post()
    createBoard(@Body() createBoardDto: CreateBoardDto): Board {
        return this.boardsService.createBoard(createBoardDto);
    }//createBoard

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }//getBoardById

    @Delete('/:id')
    deleteBoard(@Param('id') id:string): void {
        this.boardsService.deleteBoard(id);
    }//deleteBoard

    @Patch('/:id/status')
    updateBoardStatus(@Param('id') id: string, @Body('status') status: BoardStatus,) {
        return this.boardsService.updateBoardStatus(id, status);
    }//update
}//end class
