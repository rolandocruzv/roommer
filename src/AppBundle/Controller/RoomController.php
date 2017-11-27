<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AppBundle\Controller;

//use Symfony\Component\Routing\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;


use AppBundle\Entity\Person;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use AppBundle\Entity\Room;

/**
 * Description of RoomController
 *@Route("room")
 * @author rolycv
 */
class RoomController extends Controller{
    
/**
 *@Route("/list", name="room_list")
 */
public function indexAction(){
    $em = $this->getDoctrine()->getManager();
    $results = $em->getRepository('AppBundle:Room')->findAll();
    return $this->render("/room/index.html.twig", array(
        'rooms'=>$results,
        
    ));   
    
}    
    
    
}
