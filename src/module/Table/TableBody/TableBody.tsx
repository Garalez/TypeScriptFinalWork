export const TableBody = () => {
  return (
    <tbody>
          <tr className="table-light">
            <td>1</td>
            <td className="task">
              Купить слона
            </td>
            <td>В процессе</td>
            <td>
              <button className="btn btn-danger">
                Удалить
              </button>
              <button className="btn btn-success">
                Завершить
              </button>
            </td>
          </tr>

          <tr className="table-success">
            <td>2</td>
            <td className="text-decoration-line-through">
              Помыть кота
            </td>
            <td>Выполнена</td>
            <td>
              <button className="btn btn-danger">
                Удалить
              </button>
              <button className="btn btn-success">
                Завершить
              </button>
            </td>
          </tr>
        </tbody>
  )
}