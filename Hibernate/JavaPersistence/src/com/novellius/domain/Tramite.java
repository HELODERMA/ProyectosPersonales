package com.novellius.domain;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity

@Table(name="Tramite")
public class Tramite {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idTram;
	//@Column(name="Typo_Tram")
	private String tipoTram;
	private Timestamp fhcTram;
	
	public Tramite() {
	}
	
	public Tramite(String tipoTram, Timestamp fhcTram) {
		this.tipoTram = tipoTram;
		this.fhcTram = fhcTram;
	}
	
	public int getIdTram() {
		return idTram;
	}
	public void setIdTram(int idTram) {
		this.idTram = idTram;		
	}
	
	@Override
	public String toString() {
		return "Tramite [idTram=" + idTram + ", tipoTram=" + tipoTram + ", fhcTram=" + fhcTram + "]";
	}

	public String getTipoTram() {
		return tipoTram;
	}
	public void setTipoTram(String tipoTram) {
		this.tipoTram = tipoTram;
	}
	public Timestamp getFhcTram() {
		return fhcTram;
	}
	public void setFhcTram(Timestamp fhcTram) {
		this.fhcTram = fhcTram;
	}
	
	
	
}
