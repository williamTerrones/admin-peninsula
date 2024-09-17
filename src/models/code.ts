type CodeStatus = 'Activo' | 'Redimido'

interface Timestamp {
    seconds:number,
    nanoseconds:number,
}

interface UserInfo {
    nombre:string,
    email:string,
    telefono:string,
}

export interface CodeCsv {
    codigo:string,
}

export interface Code extends CodeCsv {
    estatus:CodeStatus,
    fechaInicio?:Timestamp,
    fechaFin?:Timestamp,
    fechaRegistro:Timestamp,
    infoUsuario?:UserInfo,
    idCampania:string,
    respuestaCorrecta:boolean,
}