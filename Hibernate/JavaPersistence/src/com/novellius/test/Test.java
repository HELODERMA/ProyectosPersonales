package com.novellius.test;

import java.sql.Timestamp;
import java.util.Date;
import org.hibernate.Session;

import com.novellius.domain.Tramite;
import com.novellius.util.HibernateUtil;


public class Test {
    public static void main(String[] args){
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();

        Date date = new Date();
        
//        Crear una instancia de Tramite
        Tramite tramite = new Tramite("eclipse3", new Timestamp(date.getTime()));

        //Guardar el Tramite
        session.save(tramite);

        session.getTransaction().commit();
        session.close();
    }
}
