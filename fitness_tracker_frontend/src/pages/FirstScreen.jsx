import React from 'react';
import '../styles/common.css';
import '../styles/first-screen-50-41.css';

/**
 * PUBLIC_INTERFACE
 * FirstScreen
 * A pixel-precise rendering of the extracted Figma "Первый экран — 50:41" screen,
 * rebuilt as React JSX while reusing exact CSS classes for fidelity.
 * This is a static layout to match the Figma design; interactions can be added later.
 */
export default function FirstScreen() {
  return (
    <div className="app-shell">
      <div className="canvas-wrapper" role="region" aria-label="Первый экран canvas wrapper">
        <div className="canvas" role="img" aria-label="Первый экран макет">
          {/* Ellipse 3 */}
          <div className="abs ellipse el-50-42" />

          {/* Time and date */}
          <div className="abs frame el-50-43" aria-hidden="true">
            <div className="abs text el-50-44">11:15</div>
            <div className="abs text el-50-45">Пятница, 9 декабря</div>
          </div>

          {/* Avatar + name + logout */}
          <div className="abs frame el-50-46">
            <div className="abs ellipse el-50-47" />
            <div className="abs frame el-50-48">
              <div className="abs text el-50-49">Томми</div>
              <div className="abs frame el-50-50">
                <div className="abs frame el-50-51" aria-hidden="true">
                  <div className="abs icon el-50-52" aria-hidden="true" />
                </div>
                <div className="abs text el-50-53">Выйти</div>
              </div>
            </div>
          </div>

          {/* Image placeholder with shadow */}
          <div className="abs rect el-50-54" aria-hidden="true" />

          {/* Weather */}
          <div className="abs frame el-50-55" aria-label="Погода">
            <div className="abs text el-50-56">18 C</div>
            <div className="abs text el-50-57">Немного облачно</div>
            <div className="abs frame el-50-58" aria-hidden="true">
              <div className="abs icon el-50-59" aria-hidden="true" />
            </div>
            <div className="abs ellipse el-50-60" aria-hidden="true" />
          </div>

          {/* Heading */}
          <div className="abs frame el-50-61">
            <div className="abs text el-50-63">Fitness Tracker\u2028Simply and modern</div>
          </div>

          {/* Page dots */}
          <div className="abs frame el-50-65" aria-hidden="true">
            <div className="abs frame el-50-66">
              <div className="abs ellipse el-50-67" />
              <div className="abs ellipse el-50-68" />
            </div>
          </div>

          {/* Right column */}
          <div className="abs frame el-50-69">
            {/* Sleep card */}
            <div className="abs frame el-50-70" aria-label="Мониторинг сна">
              <div className="abs card el-50-71" />
              <div className="abs text el-50-72">В среднем вы спите 7 часов</div>
              <div className="abs text el-50-73">Мониторинг сна</div>
              <div className="abs frame el-50-74" aria-hidden="true">
                <div className="abs rect el-50-75" />
                <div className="abs text el-50-76">Сон 8:00</div>
              </div>
              <div className="abs frame el-50-77" aria-hidden="true">
                <div className="abs text el-50-78">Пон</div>
                <div className="abs text el-50-79">Вт</div>
                <div className="abs text el-50-80">Ср</div>
                <div className="abs text el-50-81">Чт</div>
                <div className="abs text el-50-82">Пт</div>
              </div>
              <div className="abs frame el-50-83" aria-hidden="true">
                <div className="abs icon el-50-84" />
                <div className="abs icon el-50-85" />
              </div>
              <div className="abs frame el-50-86" aria-hidden="true">
                <div className="abs frame el-50-87">
                  <div className="abs icon el-50-88" />
                  <div className="abs icon el-50-89" />
                </div>
              </div>
            </div>

            {/* Pulse card */}
            <div className="abs frame el-50-90" aria-label="Пульс">
              <div className="abs card el-50-91" />
              <div className="abs text el-50-92">Пульс</div>
              <div className="abs text el-50-93">ударов в минуту</div>
              <div className="abs text el-50-94">70</div>
              <div className="abs icon el-50-95" aria-hidden="true" />
            </div>
          </div>

          {/* Frame 19 (avatar bg) */}
          <div className="abs frame el-50-96" aria-hidden="true">
            <div className="abs rect el-50-97" />
          </div>

          {/* Left columns */}
          <div className="abs frame el-50-99">
            <div className="abs frame el-50-100">
              {/* Съедено */}
              <div className="abs frame el-50-101" aria-label="Съедено">
                <div className="abs card el-50-102" />
                <div className="abs text el-50-103">2000 кал. из 3000 кал.</div>
                <div className="abs frame el-50-104">
                  <div className="abs text el-50-105">1000 калорий осталось</div>
                </div>
                <div className="abs text el-50-106">Съедено</div>
                <div className="abs frame el-50-107" aria-hidden="true">
                  <div className="abs ellipse el-50-108" />
                </div>
              </div>

              {/* Активность */}
              <div className="abs frame el-50-109" aria-label="Активность">
                <div className="abs card el-50-110" />
                <div className="abs icon el-50-111" aria-hidden="true" />
                <div className="abs text el-50-112">Активность</div>
                <div className="abs text el-50-113">Выпитая жидкость</div>
                <div className="abs frame el-50-114">
                  <div className="abs text el-50-115">2032</div>
                  <div className="abs text el-50-116">Шагов</div>
                </div>
                <div className="abs frame el-50-117">
                  <div className="abs text el-50-118">4 Л.</div>
                  <div className="abs text el-50-119">10 бокалов воды в день</div>
                </div>
                <div className="abs frame el-50-120" aria-hidden="true">
                  <div className="abs icon el-50-121" />
                  <div className="abs icon el-50-122" />
                </div>
                <div className="abs text el-50-123">67 %</div>
                <div className="abs ellipse el-50-124" />
                <div className="abs frame el-50-125" aria-hidden="true">
                  <div className="abs icon el-50-126" />
                  <div className="abs icon el-50-127" />
                </div>
              </div>
            </div>
          </div>

          {/* Avatar overlay */}
          <div className="abs frame el-50-128" aria-hidden="true">
            <div className="abs rect el-50-129" />
          </div>
        </div>
      </div>
    </div>
  );
}
