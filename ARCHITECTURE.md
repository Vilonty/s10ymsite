# Архитектура проекта

## Выбранный подход: Feature-Sliced Design (FSD)

### Обоснование выбора:
Для моего проекта  сайта S10YM сервера Minecraft был выбран Feature-Sliced Design по следующим причинам:

1. Соответствие масштабу - проект среднего размера с четкими бизнес-доменами (блог, профиль, правила)

2. React-ориентированность - FSD создан специально для современных фроент-энд приложетий типа react

3. Простота принципа. FSD интуитивно понятная структура, на разработку которой не ушло много времени

4. Масштабируемость - при расширении функционала легко добавлять новые фичи

5. Изоляция кода - каждая фича (blog, profile) независима, что упрощает тестирование и поддержку

Clean Architecture был отвергнут из-за избыточности, требующий большого кофличества абстракций. Layered Architecture не подошел из-за жесткого вертикального разделения, которое усложнило бы рефакторинг существующего кода.

FSD решил ключевые проблемы: дублирование кода, смешение бизнес-логики и UI, неконсистентное именование файлов. Его использование сделало проект более интуитивно понятным.

Структура проекта:

C:.
│   index.js
│   
├───app
│   │   App.css
│   │   App.js
│   │   App.test.js
│   │   index.css
│   │   reportWebVitals.js
│   │   setupTests.js
│   │   
│   ├───providers
│   │       AuthContext.js
│   │       AuthProvider.js
│   │       store.js
│   │
│   └───route
│           Routes.js
│
├───entities
│   ├───post
│   │   ├───api
│   │   │       BlogApi.js
│   │   │
│   │   ├───hooks
│   │   │       usePost.js
│   │   │       usePosts.js
│   │   │
│   │   └───store
│   │           PostsSlice.js
│   │
│   └───user
│       ├───api
│       │       profileApi.js
│       │
│       └───hooks
│               useProfile.js
│
├───features
│   ├───blog
│   │   └───ui
│   │       ├───AddPostForm
│   │       │       AddPostForm.jsx
│   │       │
│   │       ├───Loading
│   │       │       Loading.jsx
│   │       │
│   │       └───QueryError
│   │               QueryError.jsx
│   │
│   └───profile
│       └───model
│           ├───api
│           └───hooks
├───pages
│   ├───AboutPage
│   │   │   About.jsx
│   │   │
│   │   └───ui
│   │           BottomBlock.jsx
│   │           TopBlock.jsx
│   │
│   ├───BlogPage
│   │       Blog.jsx
│   │
│   ├───ImportantPage
│   │   │   Important.jsx
│   │   │
│   │   └───ui
│   │           BottomRules.jsx
│   │           Important1.jsx
│   │           Important2.jsx
│   │           Important3.jsx
│   │           Important4.jsx
│   │
│   ├───LandingPage
│   │   │   LandingPage.jsx
│   │   │
│   │   └───ui
│   │           Block2.jsx
│   │           Block3.jsx
│   │           Block4.jsx
│   │           Block5.jsx
│   │           MainBlock.jsx
│   │
│   ├───LoginPage
│   │   │   LoginPage.jsx
│   │   │
│   │   └───ui
│   │           Input.jsx
│   │
│   ├───ProfilePage
│   │   │   ProfilePage.jsx
│   │   │
│   │   └───ui
│   │           BottomBlock.jsx
│   │           TopBlock.jsx
│   │
│   ├───RegisterPage
│   │   │   Register.jsx
│   │   │
│   │   └───ui
│   │           Input.jsx
│   │
│   ├───RequestPage
│   │   │   Request.jsx
│   │   │
│   │   └───ui
│   │           Input.jsx
│   │           TextArea.jsx
│   │
│   ├───RulesPage
│   │   │   Rules.jsx
│   │   │
│   │   └───ui
│   │           BottomRules.jsx
│   │           Rules1.jsx
│   │           Rules2.jsx
│   │           Rules3.jsx
│   │           Rules4.jsx
│   │           Rules5.jsx
│   │           Rules6.jsx
│   │           Rules7.jsx
│   │           Rules8.jsx
│   │
│   └───SingleBlogPage
│           BlogPage.jsx
│
├───shared
│   ├───assets
│   │   ├───blogpage
│   │   │       image.png
│   │   │
│   │   ├───Footer
│   │   │       src.png
│   │   │
│   │   ├───HeaderLogo
│   │   │       S10YM.png
│   │   │
│   │   ├───landing
│   │   │   ├───backgrounds
│   │   │   │       bgmain.png
│   │   │   │       bgmaintop.png
│   │   │   │
│   │   │   └───images
│   │   │           1.png
│   │   │           2.png
│   │   │           3.png
│   │   │
│   │   ├───profil
│   │   │   ├───avatars
│   │   │   │       1.png
│   │   │   │
│   │   │   └───backgrounds
│   │   │           bg.png
│   │   │
│   │   └───request
│   │       └───backgrounds
│   │               bg.png
│   │
│   ├───style
│   │   ├───about
│   │   │   ├───bottomBlock
│   │   │   │       bottomBlock.module.css
│   │   │   │
│   │   │   ├───main
│   │   │   │       about.module.css
│   │   │   │
│   │   │   └───topBlock
│   │   │           topBlock.module.css
│   │   │
│   │   ├───authorization
│   │   │       authorization.module.css
│   │   │
│   │   ├───blog
│   │   │   ├───components
│   │   │   │       addPostForm.module.css
│   │   │   │
│   │   │   └───main
│   │   │           blog.module.css
│   │   │
│   │   ├───blogPage
│   │   │   └───main
│   │   │           blogpage.module.css
│   │   │
│   │   ├───footer
│   │   │       footer.css
│   │   │
│   │   ├───header
│   │   │       header.css
│   │   │
│   │   ├───important
│   │   │       important.module.css
│   │   │
│   │   ├───landing
│   │   │   ├───block1
│   │   │   │       block1Style.module.css
│   │   │   │
│   │   │   ├───block2
│   │   │   │       block2Style.module.css
│   │   │   │
│   │   │   ├───block3
│   │   │   │       block3Style.module.css
│   │   │   │
│   │   │   ├───block4
│   │   │   │       block4Style.module.css
│   │   │   │
│   │   │   ├───block5
│   │   │   │       block5Style.module.css
│   │   │   │
│   │   │   └───main
│   │   │           landing.module.css
│   │   │
│   │   ├───profil
│   │   │       profil.module.css
│   │   │
│   │   ├───register
│   │   │   └───main
│   │   │           register.module.css
│   │   │
│   │   ├───request
│   │   │   └───main
│   │   │           request.module.css
│   │   │
│   │   └───rules
│   │       └───main
│   │               rules.module.css
│   │
│   └───ui
│       ├───Checkbox
│       │       Checkbox.jsx
│       │
│       └───Error
│               QueryError.jsx
│
└───widgets
    ├───ErrorBoundary
    │       ErrorBoundary.jsx
    │
    ├───Footer
    │       Footer.jsx
    │
    └───Header
            Header.jsx
            useLinkLocation.jsx

## Правила импортов

### Разрешенные зависимости:
1. entities -> может импортировать только из shared
2. features -> может импортировать из entities и shared
3. pages -> может импортировать из features, widgets, shared
4. widgets -> может импортировать из shared и entities
5. shared -> может импортировать только из shared

### Запрещенные зависимости:
-  pages -> entities
-  widgets -> features
-  features -> pages
Циклические зависимости между любыми модулями запрещены