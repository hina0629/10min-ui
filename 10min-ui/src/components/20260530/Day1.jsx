import styles from './Day1.module.css'

function Day1() {
  return (
    <div>
      <h2>Day1</h2>

      {/* 複数クラスつけたいときはテンプレートリテラル */}
      <a href="#" className={`${styles.btn} ${styles.bgleft}`}>
        <span>背景が流れるボタン</span>
      </a>
    </div>
  )
}

export default Day1