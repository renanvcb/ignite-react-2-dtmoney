import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Modal para criar novas transações'
    >
      <h2>Cadastrar nova transação</h2>
    </Modal>
  );
}