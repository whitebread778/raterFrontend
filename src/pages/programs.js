import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import '../styles/programs.css';
import baseUrl from "../data/baseApi";


const programs = () => {
    const [allPrograms, setAllPrograms] = useState([]);
    const [searchedPrograms, setSearchedPrograms] = useState(null);

    useEffect(() => {
        async function getPrograms() {

            const resp = await fetch(`${baseUrl}api/SchoolPrograms`, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"    
                }
            });
            const data = await resp.json();
            console.log(data);
            setAllPrograms(data)
        }
        getPrograms();
    }, [])

    const programs = searchedPrograms?
        searchedPrograms.map(program => (

            <div key={program.schoolProgramId} className="program-block">
                {program.programName}
                <Link to={`/program/${program.schoolProgramId}`}>Click me</Link>
             
            </div>
        )) :
        allPrograms.map(program => (

            <div key={program.id} className="program-block">
                {program.programName}
                <Link to={`/programs/${program.schoolProgramId}`}>Click me</Link>
          
            </div>
        ))

    const searchPrograms = (input) => {
        console.log(input);
        const result = allPrograms.filter(program => program.programName.toLowerCase().includes(input));
        setSearchedPrograms(result);
    }

    const searchBar = (
        <div className="search-program-bar">
            <input
                onChange={(e) => searchPrograms(e.target.value)}
                placeholder="Enter program name"
                className="search-program-input"
            />
        </div>
    )



    return (
        <div className="programs-page-wrapper">
            <h1> Search Programs Here: </h1>
            {searchBar}
            <div className="programs-wrapper">
                {programs}
                {/* {
                    allPrograms.map(program => {
                        return <Program
                                    key={program.id}
                                    program={program}/>
                    })
                } */}
            </div>
        </div>
    )
}

export default programs;