package sesac.jpaPractice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.jpaPractice.domain.Board;
import sesac.jpaPractice.dto.BoardListDTO;
import sesac.jpaPractice.dto.BoardWriteDTO;
import sesac.jpaPractice.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    public List<BoardListDTO> getBoardList(){ //게시글 리스트를 가져오는 것
        List<Board> boards = boardRepository.findAll();
        List<BoardListDTO> list = new ArrayList<>();

        for ( int i = 0; i < boards.size(); i++ ) {
            BoardListDTO board = new BoardListDTO();
            board.setID(boards.get(i).getId());
            board.setNo(i+1);
            board.setTitle(boards.get(i).getTitle());
            board.setContent(boards.get(i).getContent());
            board.setWriter(boards.get(i).getWriter());

            list.add(board);
        }
        return list;
    }
    public BoardListDTO getBoardById(String id) { //id를 이용해서 하나의 게시글을 가져오는 것
        Optional<Board> board = boardRepository.findById(Integer.parseInt(id));
        BoardListDTO boardListDTO = new BoardListDTO();
        if ( board.isPresent() ){
            boardListDTO.setID(board.get().getId());
            boardListDTO.setTitle(board.get().getTitle());
            boardListDTO.setContent(board.get().getContent());
            boardListDTO.setWriter(board.get().getWriter());
        }
        return boardListDTO;
    }
    public void addBoard(BoardWriteDTO boardWriteDTO) {
        Board board = new Board();
        board.setTitle(boardWriteDTO.getTitle());
        board.setContent(boardWriteDTO.getContent());
        board.setWriter(boardWriteDTO.getWriter());

        boardRepository.save(board);
    }
    public void updateBoard(BoardListDTO boardListDTO) {
        Board board = new Board();
        board.setId(boardListDTO.getID());
        board.setTitle(boardListDTO.getTitle());
        board.setContent(boardListDTO.getContent());
        board.setWriter(boardListDTO.getWriter());

        boardRepository.save(board);
    }
//    addBoard와 updateBoard의 차이는 save함수를 실행할 때 전달되는 entity가 setId가 있느냐 없느냐 차이이다.
//    즉 id값이 오면 그 id값을 찾아서 덮어쓰는 것이고 id 값이 없으면 새롭게 추가하는 것이다.
//    save 함수는 update일때나 insert일 때나 둘다 사용한다.
    public void deleteBoard(int Id) {
        boardRepository.deleteById(Id);
    }
}
