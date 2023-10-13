//IMPORTS
import React, { useState, useEffect } from 'react';
import BuyerWall from './components/BuyerWall';
import AddBuyerCard from './components/AddBuyerCard';
import SideMenu from './components/SideMenu';
import api from './api-config';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchBuyers();
  }, []);

  // GET BUYERS
  const fetchBuyers = async () => {
    try {
      const response = await api.get('/');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching buyers:', error);
    }
  };

  // CREATE BUYER
  const handleAddBuyer = async (name, text, color) => {
    try {
      const response = await api.post('/', {
        name,
        text,
        color,
      });

      const newCard = {
        id: response.data._id,
        name,
        text,
        color,
      };

      setCards((prevCards) => [...prevCards, newCard]);
    } catch (error) {
      console.error('Error creating buyer:', error);
    }
  };

  // EDIT BUYER
  const handleEditBuyerTask = async (id, editedText) => {
    try {
      const response = await api.put(`/update/${id}`, {
        text: editedText,
      });
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, ...response.data } : card
        )
      );
    } catch (error) {
      console.error('Error updating buyer:', error);
    }
  };

  // DELETE BUYER
  const handleDeleteBuyer = async (id) => {
    try {
      await api.delete(`/delete/${id}`);
      setCards(cards.filter((card) => card.id !== id));
    } catch (error) {
      console.error('Error deleting buyer:', error);
    }
  };

  return (
    <div className='container'>
      <div className='grid-container'>
        <SideMenu />
        <div>
          <div className='add-card'>
            <AddBuyerCard handleAddBuyer={handleAddBuyer} />
          </div>
          <div className='existing-cards'>
            <BuyerWall
              cards={cards}
              handleDeleteBuyer={handleDeleteBuyer}
              handleEditBuyerTask={handleEditBuyerTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
