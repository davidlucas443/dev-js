import styles from './Modal.module.css';

export default function Modal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={() => setOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p>Modal</p>
        <button onClick={() => setOpen(false)}>Fechar</button>
      </div>
    </div>
  );
}