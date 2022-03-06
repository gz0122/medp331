function getZodiac() {
    var toyear = 1985; // the furthest it goes back
    var birthyear = document.frm.inyear.value;
    var birthpet="Ox" // starts with 1985 = Ox

    x = (toyear - birthyear) % 12

    if ((x == 1) || (x == -11)) {
        // 1984, 1996, 2008, 2020
        birthpet="Rat"      } 
        else  {
            
            if (x == 0)             {
            // 1985, 1997, 2009, 2021
            birthpet="Ox"           }
            else  {

            if ((x == 11) || (x == -1)) {
            // 1986, 1998, 2010, 2023
            birthpet="Tiger"          }
            else  {

            if ((x == 10) || (x == -2)) {
            // 1987, 1999, 2011, 2023
            birthpet="Rabbit"         }
            else  {

            if ((x == 9) || (x == -3))  {
            // 1988, 2000, 2012, 2024
            birthpet="Dragon"         }
            else  {

            if ((x == 8) || (x == -4))  { 
            // 1989, 2001, 2013, 2025
            birthpet="Snake"          }
            else  {

            if ((x == 7) || (x == -5))  { 
            // 1990, 2002, 2014, 2026
            birthpet="Horse"          }
            else  {

            if ((x == 6) || (x == -6))  { 
            // 1991, 2003, 2015, 2027
            birthpet="Sheep"          }
            else  {

            if ((x == 5) || (x == -7))  {
            // 1992, 2004, 2016, 2028  
            birthpet="Monkey"         }
            else  {

            if ((x == 4) || (x == -8))  {
            // 1993, 2005, 2017, 2029
            birthpet="Chicken"        }
            else  {

            if ((x == 3) || (x == -9))  {
            // 1994, 2006, 2018, 2030
            birthpet="Dog"            }
            else  {

            if ((x == 2) || (x == -10))  {
            // 1995, 2007, 2019, 2031
            birthpet="Pig"             }  
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
        document.frm.birth.value = birthpet;
}