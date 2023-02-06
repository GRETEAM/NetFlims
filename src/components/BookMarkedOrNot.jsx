import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import addToBookmark from '../assets/icons/icon-bookmark-empty.svg';
import delToBookmark from '../assets/icons/icon-bookmark-full.svg';
import { supabase } from "../supabaseClient.js";

const BookMarkedOrNot = () => {
  const user = useSelector((store) => store.reducerUser);
  const dispatch = useDispatch();
  // console.log(user.bookmarks);

  const [inBookmarks, setInBookmarks] = useState([]);
  // console.log(inBookmarks);

  const handleSubmit = async (e) => {
    const tmp = user.bookmarks != null ? [...user.bookmarks] : [];
    if (e == "del") {
      const deleted = tmp.filter((item) => {
        if (item.id != user.bookmarks.id) {
          return item;
        }
      });
      
      dispatch({ type: "DELETE_BOOKMARK", payload: deleted });
      const { data, error } = await supabase
        .from("profiles")
        .update([{ bookmarks: deleted }])
        .eq("id", user.id);
    } else {
      tmp.push(user.bookmarks);
      // console.log(tmp);
      dispatch({ type: "ADD_BOOKMARK", payload: tmp });
      const { data, error } = await supabase
        .from("profiles")
        .update([{ bookmarks: tmp }])
        .eq("id", user.id);
    }
  };

  return (
    <div className="card-bookmark">
      {inBookmarks ? (
        <button
          className="card-bookmark-img"
          onClick={() => handleSubmit("add")}
        >
          <img src={addToBookmark} alt="Add to bookmark" />
        </button>
      ) : (
        <button
          className="card-bookmark-img"
          onClick={() => handleSubmit("del")}
        >
          <img src={delToBookmark} alt="Delete to bookmark" />
        </button>
      )}
    </div>
  ); 
};
 
export default BookMarkedOrNot;