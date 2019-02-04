package com.novellius.test;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.query.Query;

import com.novellius.domain.Tramite;
import com.novellius.domain.Tramite_;
import com.novellius.util.HibernateUtil;


public class Test {
    public static void main(String[] args){
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        
//        CLASE DE PRUEBA 1
//        Date date = new Date();
//        //Crear una instancia de Tramite
//        Tramite tramite = new Tramite("t450p", new Timestamp(date.getTime()));
//        //Guardar el Tramite
//        session.save(tramite);
        
//        HQL-> Metodo to strin clase Tramite.java
//        @SuppressWarnings("unchecked")
//		Query<Tramite> query = session.createQuery("from Tramite");
//        List<Tramite> tramites = query.getResultList();
//        System.out.println(tramites.toString());
//        
        
//        CRITERIA
        
        //Fabrica  para las piezas individuales del criterio (consulta)
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<Tramite> criteria = builder.createQuery( Tramite.class );
        
        //Define el tipo de entidad que retorna la consulta
        Root<Tramite> root = criteria.from( Tramite.class );
        
//        construyendo la consulta
        criteria.select( root );
        criteria.where(builder.equal(root.get(Tramite_.tipoTram),"Credito"));
        
        List<Tramite> tramites = session.createQuery( criteria ).getResultList();
        
        System.out.println(tramites.toString());
        
        
        
        session.getTransaction().commit();
        session.close();             
        
    }
}
