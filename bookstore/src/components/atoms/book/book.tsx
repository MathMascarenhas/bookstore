import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { api } from "../../../utils/api/api";
import { StyledBook } from "./styles";

type Props = {
  bookTitle: string;
  author: string;
  imageUrl: string;
  description: string;
  price: number;
  rate: number;
  pages: number;
  id: string;
  control: boolean;
  handleModal: () => void;
  setEdit:Dispatch<SetStateAction<boolean>>;
  setAddBook: Dispatch<SetStateAction<boolean>>;
  setControl: Dispatch<SetStateAction<boolean>>;
};

export function BookInfo({
  bookTitle,
  description,
  author,
  price,
  rate,
  pages,
  id,
  imageUrl,
  control,
  handleModal,
  setEdit,
  setAddBook,
  setControl,
}: Props) {

  return (
    <div>

    
    <StyledBook>
    <div className="info">
    <img className="bookImg" src={imageUrl} alt="book-image" />
     <article>
      <h1>{bookTitle}</h1>
     <h2>{author}</h2>
     <h3>{description}</h3>
     </article>
     </div>
      <div className="info-footer">
      <h4>Price: {price}</h4>
      <h4>Pages: {pages}</h4>
        <span>
          <img src="./../../../star.png" alt="star icon" />
          {`${rate}`}
        </span>
      </div>
      <div className="div-btn">
        <button className="edit-btn" onClick={() => {
          setAddBook(true);
          setEdit(true);
        }
      }>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={async () => {
            await api.deleteBook(id);
            setControl(!control);
            handleModal();
          }}
        >
          Delete
        </button>
      </div>
    </StyledBook>
    </div>
  );
}