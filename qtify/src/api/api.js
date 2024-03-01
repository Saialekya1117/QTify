import React from "react";
import axios from "axios";

export const BACKEND_POINT= "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums =async()=>{
    try{
        const response = await axios.get(`${BACKEND_POINT}/albums/top`);
        return response.data;
    }catch(e){
        console.log("Error while fetching : ",e);
    }
};

export const fetchNewAlbums = async ()=>{
    try{
        const response = await axios.get(`${BACKEND_POINT}/albums/new`);
        return response.data;
    }catch(e){
        console.log("Error while fetching : ",e);
    }
};

export const fetchSongs = async ()=>{
    try{
        const response = await axios.get(`${BACKEND_POINT}/songs`);
        return response.data;
    }catch(e){
        console.log("Error while fetching : ",e);
    }
};

export const fetchFilters = async ()=>{
    try{
        const response = await axios.get(`${BACKEND_POINT}/genres`);
        return response.data;
    }catch(e){
        console.log("Error while fetching : ",e);
    }
};