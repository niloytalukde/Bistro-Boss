import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useFetchAll } from '../../CustomsHooks/useFetchAll';
import "react-tabs/style/react-tabs.scss";
import Card from '../../SharedComponents/Card';
const Tabitem = () => {
    const data =useFetchAll()
    const saladData =data.filter(d=>d.category=='salad')
    const pizzaData =data.filter(d=>d.category=='pizza')
    const soupsData =data.filter(d=>d.category=='soup')
    const dessertData =data.filter(d=>d.category=='dessert')
    const drinksData =data.filter(d=>d.category=='drinks')
    return (
        <div>
<Tabs>
   <div className='mx-auto flex justify-center mt-5'>
   <TabList>
      <Tab>SALAD</Tab>
      <Tab>PIZZA</Tab>
      <Tab>SOUPS</Tab>
      <Tab>DESSERT</Tab>
      <Tab>DRINKS</Tab>
      
    </TabList>
   </div>

      {/* Salad Data start here  */}
    <TabPanel className='md:w-[77rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-5'>
     {
      saladData.map(data=><Card data={data}></Card>)
     }
    </TabPanel>
    {/* Salad Data end here  */}
    {/* pizza Data start here  */}
    <TabPanel className='md:w-[77rem] mx-auto grid  lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5'>
     {
      pizzaData.map(data=><Card data={data}></Card>)
     }
    </TabPanel>
   {/* pizza Data end here  */}
   
    {/* soups Data start here  */}
    <TabPanel className='md:w-[77rem] mx-auto grid  lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5'>
     {
      soupsData.map(data=><Card data={data}></Card>)
     }
    </TabPanel>
   {/* soups Data end here  */}
    {/* Dessert Data start here  */}
    <TabPanel className='md:w-[77rem] mx-auto grid  lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5'>
     {
      dessertData.map(data=><Card data={data}></Card>)
     }
    </TabPanel>
   {/*Dessert  Data end here  */}
    {/* Drink Data start here  */}
    <TabPanel className='md:w-[77rem] mx-auto grid  lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5'>
     {
      drinksData.map(data=><Card data={data}></Card>)
     }
    </TabPanel>
   {/*Drink  Data end here  */}
   
  </Tabs>
</div>
    );
};

export default Tabitem;