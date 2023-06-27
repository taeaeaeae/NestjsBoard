import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];
    
    getAllBoards(): Board[] {
        return this.boards;
    }//getAllBoards

    createBoard(createBoardDto: CreateBoardDto): Board {
        const { title, description } = createBoardDto;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        };

        this.boards.push(board);
        return board;
    } //createBoard

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }//getBoardById

    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }//deleteBoard

    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }//updateBoardStatus
}//end class
