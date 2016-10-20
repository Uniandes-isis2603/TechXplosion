/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.techxplosion.bibliotecas.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;

/**
 *
 * @author jm.rodriguez11
 */
@Entity
public class UsuarioEntity extends BaseEntity implements Serializable{
    
   @PodamExclude 
   @OneToMany(mappedBy="usuario",cascade=CascadeType.ALL,orphanRemoval=true)
   private List<ReservaEntity>reservas=new ArrayList();
   
   @PodamExclude 
   @OneToMany(mappedBy="usuario",cascade=CascadeType.ALL,orphanRemoval=true)
   private List<AlquilerEntity>alquileres=new ArrayList();
   
   @PodamExclude 
   @OneToMany(mappedBy="usuario",cascade=CascadeType.ALL,orphanRemoval=true)
   private List<MedioPagoEntity>mediosDePago=new ArrayList();
   
   
   public List<ReservaEntity> getReservas(){
       return reservas;
   }
   
   public List<MedioPagoEntity> getMedioPago(){
       return mediosDePago;
   }
   
   public void setReservas(List<ReservaEntity> reserva){
       this.reserva=reserva;
   }
    
   public List<AlquilerEntity> getAlquileres(){
       return alquileres;
   }
   public void setAlquileres(List<AlquileresEntity> alquileres){
       this.alquileres=alquileres;
   }
   
    public void setMediosDePago(List<MedioPagoEntity> medios){
       this.mediosDePago =medios;
   }
   
     private Long id;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

   
}
