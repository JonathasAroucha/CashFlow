import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactiosProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
    console.log('teste')
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactiosProvider>
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactiosProvider>
  );
}

