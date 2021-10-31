**Task4**
1. Добавлены моки по товарам в папке app/mocks. 
2. Добавлены комментарии в app.js для запуска приложения без mongojs.
3. Применены встроенные пайпы uppercase и currency в cart-list.component.html.
4. Метод getProducts() сервиса ProductService возвращает observable, добавлен пайп async на получение товаров.
5. Создан пайп OrderByPipe для сортировки массива объектов товаров карты. Пайп принимает массив, поле для фильтрации и флаг для порядка сортировки.
6. Пайп OrderByPipe задекларирован в SharedModule и добавлен в exports.
7. Из SharedModule экспортированы CommonModule, FormsModule.

**Task 3**
1. CartService модифицирован, в него перенесены методы getProducts, addProduct, removeProduct, increaseQuantity/decreaseQuantity, changeQuantity, removeAllProducts, updateCartData. Сервис хранит в себе поля isEmptyCart, cartProducts, totalQuantity, totalSumю
2. Созданы сервисы ConfigOptionsService, ConstantsService, GeneratorService, LocalStorageService.
3. Восстановлен компонент FirstComponent (был ранее переименован в ProductComponent), в него внедрены сервисы из п.2. Использован декоратор @Optional
4. Создана директива CatDirective, которая меняет текст товара на котика. Использованы ElementRef и Renderer2.

**Task 2.**
1. Создан компонент CartItem - для отображения карточки товара в корзине;
2. Создан CartService для получения списка товаров и их модификации (увеличение количества товара, уменьшение, удаление товара из корзины).
3. Реализовано получение данных о товарах с бэка (mongodb + express).
4. Использование @ViewChild и ElementRef реализовано в header-компоненте для большего удобства.
5. Добавлено поведение при наведении на товар в корзине, создана директива HighlightDirective.
6. Использованы DOM-события в коде.
7. Использованы декораторы @Input(), @Output().
8. Модифицирован CartListComponent - добавлено отображение количества купленных товаров и общая сумма.
9. Добавлено Task-2 demo в wiki https://github.com/sova-nn/shop/wiki/Task-2

