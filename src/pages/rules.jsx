import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../style/rules.css';

export const Rules = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} blog={false}/>
            <main>
                    <div class="mainblock">
                        <h2>правила</h2>

                        <div class='rules-common rules-dark'>

                            <span>Пункт 1: Убийства людей</span>
                            <span>Запрещены любые беспричинные убийства игроков, кроме:</span>

                            <ul>
                                <li>Убийства на территории где установлены разрешения на это</li>
                                <li>Самозащита</li>
                                <li>Случайные убийства </li>
                            </ul>
                            
                        </div>

                        <div class='rules-common rules-light'>
                            <span>Пункт 2: Гриферство построек</span>
                            <span>Запрещены любые несогласованные изменения в чужих постройках</span>

                            <ul>
                                <li>Взрывы криперов не являются гриферством если не были намеренно сделаны игрокомдля разрушения постройки </li>
                                <li>Вы можете ломать аморальные постройки (свастики, половые органы, арты 18+ и т.д.)</li>
                            </ul>
                            
                        </div>
                        <div class='rules-common rules-dark'>
                            <span>Пункт 3: Намеренное причинение вреда в работе сервера</span>
                            <ul>
                                <li>Pапрещены постройки любых лаг машин/бан чанков/любых других вещей ломающие сервер  </li>
                                <li>Запрещены механизмы которые полностью положат сервер</li>
                            </ul>
                            
                            
                        </div>
                        <div class='rules-common rules-light'>

                            <span>Пункт 4: Читы</span>
                            <span>Запрещены любые программы/моды/текстурпаки/баритоны дающие преимущество над другими игроками (в том числе текстурпак икс рей). Так же запрещено укрывательство читеров </span>
                            <span>В случае если вы будете пойманы с читами, вы будете забанены а все действия вашего аккаунта удалены (то есть даже если вы ставили блоки или ломали, всё вернутся в изначальное состояние)</span>
                           
                        </div>
                        <div class='rules-common rules-dark'>
                            <span>Пункт 5: Дюпы</span>
                            <span>Дюпы ресурсов запрещены способом, за исключением:</span>
                            <ul>
                                <li>Разрешён миханизм дюпа динамита</li>
                                <li>В связи с решением "первого серверного собрания игроков" разрешены дюпы предметов имеющих гравитацию через механизмы</li>
                                <li>Разрешены дюпы ковров через механизм</li>
                            </ul>
                            
                        </div>
                        <div class='rules-common rules-light'>
                            <span>Пункт 6: фермы и механизмы</span>
                            <span>Разрешены любые фермы и механизмы, за исключением:</span>
                            <ul>
                                <li>Механизмов и ферм которые запрещены пунктами 3 и 4 (дюп механизмы и лаг машины)</li>
                                <li>Запрещены фермы которые полностью останавливают работоспособность сервера</li>
                            </ul>
                            
                        </div>
                        <div class='rules-common rules-dark'>
                            <span>Пункт 7: аморальное поведение (оскорбления и т.д.)</span>
                            <span>К сожалению подобные вещи зависят от контекста, поэтому в этом пункте возможны долгие разборки, но:</span>
                            <ul>
                                <li>Запрещается оскорбление игроков</li>
                                <li>Запрещается строительство аморальных вещей (типа свастик)</li>
                            </ul>
                            
                        </div>
                        <div class='rules-common rules-light'>
                            <span>Пункт 8: смерти игроков</span>
                            <span>При потери во время смерти игрока его вещей, отката инвентаря или их возврат не будет (даже в связи ошибкой работы сервера)</span>
                            <span>Подобное возможно только если игрока намеренно убил другой игрок и отказывается их вернуть (при этом вещи будут возвращены только после бана такого игрока)</span>
                            
                        </div>
                        <div class='buttom-rules rules-dark'>
                            <span>Все пункты кроме 3, 4 и 5 могут быть решены мирно (без банов)</span>
                            <span>В СЛУЧАЕ КАКИХ-ЛИБО ПРОБЛЕМ, ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С АДМИНИСТРАЦИЕЙ В НАШЕМ ДИСКОРД СЕРВЕРЕ</span>
                        </div>
                                   
                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}