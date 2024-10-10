import mongoose, { Schema } from 'mongoose';

export interface IMedicalDetailId {
    id: string;
}

export interface IMedicalServices {
    name: string;
    img: string;

    tranform(): IReponseMedicalServices;
}

export interface IReponseMedicalServices {
    id: string;
    name: string;
    img: string;
}

export interface IMedicalDetail {
    name: string;
    img: string;
    medical_service_id: string;

    tranform(): IReponseMedicalDetial;
}

export interface IReponseMedicalDetial {
    id: string;
    name: string;
    img: string;
    medical_service_id: string;
}
