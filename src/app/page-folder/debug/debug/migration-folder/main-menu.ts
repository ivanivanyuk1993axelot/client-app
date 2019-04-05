export const mainMenu = {
  list: [
    {
      id: null,
      menuType: 0,
      class1: null,
      class2: null,
      class3: null,
      items: [
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-download',
          text: 'Поступление',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по поступлению',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/inbound-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'План поступления',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Ожидаемые поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/expected-receipt-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Планы поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/receipt-plan-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Приемка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Приемка (пересчет)',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/counting-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Приемка с раскладыванием',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/calculate-extended',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Предварительная приемка',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/precalc',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Контроль поступления',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Контроль поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/control',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Размещение',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Размещение поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/relocate-palletes',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Размещение по составу',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/relocate-by-contents',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Маркировка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Маркировки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/labelling-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Генерация поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/pallete-generator',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-truck',
          text: 'Отгрузка',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по отгрузке',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/outboud-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'План отгрузки',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Волны',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/wave-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Заказы на отгрузку',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-order-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Планы отгрузки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-plan-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Отбор и сортировка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Отбор объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/picking-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отбор поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/pallete-selection',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Сортировка',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/sorting',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отмена отбора',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/selection-cancellation',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Контроль отгрузки',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Контроль отгрузки по составу',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/control-by-contents',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Контроль отгрузки по местам',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/control-by-locations',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Упаковка и консолидация',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Упаковка',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/package-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Консолидация',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/outboud-consolidation',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Рейсы',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Рейсы',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/delivery-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Отгрузка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Отгрузка поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/palletes',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отгрузка объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-shipping-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Генерация коробов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/box-generator',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-diff',
          text: 'Остатки и внутренние операции',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по остаткам',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/balance-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Запасы',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Схема склада (остатки)',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/stock-balance',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Перемещения',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Перемещение мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-movement-task-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Перемещение объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-movement-task-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Пополнение',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Пополнение объектами хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/add-storage-items',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Пополнение поддонами',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/add-palletes',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Инвентаризация',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Акты сверки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/revision-act-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Инвентаризация по местам',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/checkout-by-locations',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Инвентаризация состава',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/contents-checkout',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Ввод остатков',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/enter-balance',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Изменение состояния',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Изменения состояний',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/state-changing-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Комплектация',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Заказы на комплектацию',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/equipment-order-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Сборка комплектов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Разборка комплектов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '',
                  items: null
                }
              ]
            },
            {
              class: 'menu-header-weaker',
              imageUrl: null,
              text: 'Прочее',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Перемещения мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-movement-task-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Перемещения объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-movement-task-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Пересчеты',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/counting-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Комплектации',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/equipment-editor',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-collaboration',
          text: 'Управление ресурсами',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по ресурсам',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/resources/resource-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Нормы и выработка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Нормы выполнения операций',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/operation-rate-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Ресурсы',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Исполнители',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/performer-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Группы исполнителей',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/performer-group-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Роли исполнителей',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/performer-role-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Смены',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shift-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Графики работы',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/schedule-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'ТСД',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'ТСД',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/tsd-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Модели ТСД',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/tsd-model-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки создания мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/locations-creation-settings-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Использовать смены',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/resources/use-shifts',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Используемые языки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/resources/used-languages',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-store',
          text: 'Управление двором',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Ворота',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Ворота',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/gate-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Маршруты и адреса',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Маршруты',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/route-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'ТС и водители',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Транспортные средства',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/vehicle-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Модели ТС',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/vehicle-model-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Водители',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/driver-editor',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-sync',
          text: 'Интеграция',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Поступление',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Планы поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/receipt-plan-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Ожидаемые поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/expected-receipt-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Отгрузка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Волны',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/wave-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Планы отгрузки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-plan-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Заказы на отгрузку',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-order-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Номенклатура',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Номенклатура',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Характеристики номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-properties-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Партии номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-batch-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Упаковки номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-package-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Объекты хранения для номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-sku-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Настройки',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Настройки конвертации документов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/document-conversion-settings-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Настройки конвертации объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-conversion-editor',
                  items: null
                }
              ]
            },
            {
              class: 'menu-header-weaker',
              imageUrl: null,
              text: 'Прочее',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Штрихкоды номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-barcode-editor',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-books',
          text: 'Справочники',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Контрагенты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Контрагенты',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/business-partner-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Договоры контрагентов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/contract-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Виды договоров контрагентов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/contract-type-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Объекты хранения',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Объекты хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Состояния',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-status-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Типы объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-type-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Штрихкоды объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-barcode-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Торговые марки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/trademark-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Упаковки и вместимость',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Упаковки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/package-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Единицы измерения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/uom-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Конфигурации упаковок',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/package-config-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Классификация',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Классификаторы',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/classifier-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Показатели рейтингов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/rating-value-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Последовательности выбора классов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/class-selection-sequence-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Классификация объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-classification-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Использовать типоразмеры упаковок',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/dictionaries/use-package-size-types',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Использовать рейтинги',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/dictionaries/use-ratings',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-make-group',
          text: 'Топология и процессы',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по топологии',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/resource-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Топология',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Схема склада (топология)',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/storage-map',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Зоны склада',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/zone-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Ячейки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/cells-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Секции ячеек',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/cell-block-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Типы секций ячеек',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/cell-block-type-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Транзитные зоны',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/transient-zones',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Схема склада (рейтинги)',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/storage-map-rated',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Места хранения',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Места хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Состояния мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-status-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Классы мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-class-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Типы мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-type-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Планирование',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Стратегии',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Алгоритмы размещения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/relocation-algorithms',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Алгоритмы отбора',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/selection-algorithms',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Алгоритмы пополнения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/addition-algorithms',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Алгоритмы уплотнения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/density-algorithms',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Задачи и очереди',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Очереди задач',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/task-pool-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Стационарные рабочие места',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stationary-work-desk-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Проблемы',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/problem-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'События и регламенты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Подписки на события',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/event-subscriptions-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Обработчики событий',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/event-handlers-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Регламентные операции',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/reglament-operation-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Процессы',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Процессы отгрузки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-process-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Процессы поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/receipt-process-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Типы отгрузки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-type-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Типы поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/receipt-type-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки упаковки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/package-settings-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки передачи документов в отбор',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/document-picking-transfer-settings-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки объединения документов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/document-merge-settings-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Модели учета',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Модели учета',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Сроки хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/storage-life-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Настройки остаточного срока годности',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/residual-shelf-life-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Типы акцизов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/excise-type-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Этикетки и печать',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Макеты этикеток',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/label-template-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Структуры штрихкодов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/barcode-structure-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Принтеры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/printer-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Параметры печати',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/print-settings-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Пакеты документов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/document-package-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Генерация поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Генерация коробов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Прочее',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки совместимости',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                }
              ]
            }
          ]
        }
      ],
      code: 'main-menu-initial',
      fullName: null,
      nameEN: null,
      nameRF: null,
      name: null,
      shortName: null,
      removed: false,
      isActual: true,
      version: 2,
      domain: '',
      sessionId: '',
      timestamp: 0,
      uuid: '933b9f57-b467-4a94-9de5-3cb33f83b153'
    },
    {
      id: null,
      menuType: 1,
      class1: null,
      class2: null,
      class3: null,
      items: [
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-download',
          text: 'Поступление',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по поступлению',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/inbound-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'План поступления',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Ожидаемые поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/expected-receipt-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Планы поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/receipt-plan-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Приемка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Приемка (пересчет)',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/counting-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Приемка с раскладыванием',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/calculate-extended',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Предварительная приемка',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/precalc',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Контроль поступления',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Контроль поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/control',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Размещение',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Размещение поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/relocate-palletes',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Размещение по составу',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/relocate-by-contents',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Маркировка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Маркировки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/labelling-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Генерация поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/inbound/pallete-generator',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-truck',
          text: 'Отгрузка',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по отгрузке',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/outboud-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'План отгрузки',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Волны',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/wave-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Заказы на отгрузку',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-order-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Планы отгрузки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-plan-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Отбор и сортировка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Отбор объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/picking-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отбор поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/pallete-selection',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Сортировка',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/sorting',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отмена отбора',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/selection-cancellation',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Контроль отгрузки',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Контроль отгрузки по составу',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/control-by-contents',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Контроль отгрузки по местам',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/control-by-locations',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Упаковка и консолидация',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Упаковка',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/package-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Консолидация',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/outboud-consolidation',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Рейсы',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Рейсы',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/delivery-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Отгрузка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Отгрузка поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/palletes',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отгрузка объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-shipping-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Генерация коробов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/outbound/box-generator',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-diff',
          text: 'Остатки и внутренние операции',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по остаткам',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/balance-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Запасы',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Схема склада (остатки)',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/stock-balance',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Перемещения',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Перемещение мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-movement-task-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Перемещение объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-movement-task-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Пополнение',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Пополнение объектами хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/add-storage-items',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Пополнение поддонами',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/add-palletes',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Инвентаризация',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Акты сверки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/revision-act-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Инвентаризация по местам',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/checkout-by-locations',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Инвентаризация состава',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/contents-checkout',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Ввод остатков',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stocks/enter-balance',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Изменение состояния',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Изменения состояний',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/state-changing-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Комплектация',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Заказы на комплектацию',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/equipment-order-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Сборка комплектов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Разборка комплектов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '',
                  items: null
                }
              ]
            },
            {
              class: 'menu-header-weaker',
              imageUrl: null,
              text: 'Прочее',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Перемещения мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-movement-task-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Перемещения объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-movement-task-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Пересчеты',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/counting-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Комплектации',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/equipment-editor',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-collaboration',
          text: 'Управление ресурсами',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по ресурсам',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/resources/resource-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Нормы и выработка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Нормы выполнения операций',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/operation-rate-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Ресурсы',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Исполнители',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/performer-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Группы исполнителей',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/performer-group-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Роли исполнителей',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/performer-role-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Смены',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shift-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Графики работы',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/schedule-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'ТСД',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'ТСД',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/tsd-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Модели ТСД',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/tsd-model-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки создания мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/locations-creation-settings-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Использовать смены',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/resources/use-shifts',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Используемые языки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/resources/used-languages',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-store',
          text: 'Управление двором',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Ворота',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Ворота',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/gate-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Маршруты и адреса',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Маршруты',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/route-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'ТС и водители',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Транспортные средства',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/vehicle-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Модели ТС',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/vehicle-model-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Водители',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/driver-editor',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-sync',
          text: 'Интеграция',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Поступление',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Планы поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/receipt-plan-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Ожидаемые поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/expected-receipt-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Отгрузка',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Волны',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/wave-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Планы отгрузки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-plan-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Заказы на отгрузку',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-order-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Номенклатура',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Номенклатура',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Характеристики номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-properties-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Партии номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-batch-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Упаковки номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-package-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Объекты хранения для номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-sku-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Настройки',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Настройки конвертации документов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/document-conversion-settings-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Настройки конвертации объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-conversion-editor',
                  items: null
                }
              ]
            },
            {
              class: 'menu-header-weaker',
              imageUrl: null,
              text: 'Прочее',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Штрихкоды номенклатуры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/erp-barcode-editor',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-books',
          text: 'Справочники',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Контрагенты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Контрагенты',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/business-partner-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Договоры контрагентов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/contract-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Виды договоров контрагентов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/contract-type-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Объекты хранения',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Объекты хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Состояния',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-status-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Типы объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-type-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Штрихкоды объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-barcode-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Торговые марки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/trademark-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Упаковки и вместимость',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Упаковки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/package-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Единицы измерения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/uom-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Конфигурации упаковок',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/package-config-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Классификация',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Классификаторы',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/classifier-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Показатели рейтингов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/rating-value-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Последовательности выбора классов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/class-selection-sequence-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Классификация объектов хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/sku-classification-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Использовать типоразмеры упаковок',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/dictionaries/use-package-size-types',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Использовать рейтинги',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/dictionaries/use-ratings',
                  items: null
                }
              ]
            }
          ]
        },
        {
          class: 'collapse-list-title',
          imageUrl: 'icon-make-group',
          text: 'Топология и процессы',
          hint: null,
          isEnabled: false,
          securityId: null,
          action: '#',
          items: [
            {
              class: null,
              imageUrl: null,
              text: 'Отчеты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Отчеты по топологии',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/resource-reports',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Топология',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Схема склада (топология)',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/storage-map',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Зоны склада',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/zone-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Ячейки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/cells-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Секции ячеек',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/cell-block-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Типы секций ячеек',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/cell-block-type-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Транзитные зоны',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/transient-zones',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Схема склада (рейтинги)',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/storage-map-rated',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Места хранения',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Места хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Состояния мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-status-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Классы мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-class-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Типы мест хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/location-type-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Планирование',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Стратегии',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Алгоритмы размещения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/relocation-algorithms',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Алгоритмы отбора',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/selection-algorithms',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Алгоритмы пополнения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/addition-algorithms',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Алгоритмы уплотнения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/density-algorithms',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Задачи и очереди',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Очереди задач',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/task-pool-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Стационарные рабочие места',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/stationary-work-desk-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Проблемы',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/problem-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'События и регламенты',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Подписки на события',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/event-subscriptions-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Обработчики событий',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/event-handlers-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Регламентные операции',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/reglament-operation-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Процессы',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Процессы отгрузки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-process-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Процессы поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/receipt-process-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Типы отгрузки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/shipping-type-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Типы поступления',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/receipt-type-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки упаковки',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/package-settings-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки передачи документов в отбор',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/document-picking-transfer-settings-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки объединения документов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/document-merge-settings-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Модели учета',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Модели учета',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/warehouse-model-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Сроки хранения',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/storage-life-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Настройки остаточного срока годности',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/residual-shelf-life-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Типы акцизов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/excise-type-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Этикетки и печать',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Макеты этикеток',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/label-template-editor',
                  items: null
                },
                {
                  class: 'menu-header-stronger',
                  imageUrl: null,
                  text: 'Структуры штрихкодов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/barcode-structure-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Принтеры',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/printer-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Параметры печати',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/print-settings-editor',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Пакеты документов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/document-package-editor',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Сервис',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Генерация поддонов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                },
                {
                  class: null,
                  imageUrl: null,
                  text: 'Генерация коробов',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                }
              ]
            },
            {
              class: null,
              imageUrl: null,
              text: 'Прочее',
              hint: null,
              isEnabled: false,
              securityId: null,
              action: '#',
              items: [
                {
                  class: null,
                  imageUrl: null,
                  text: 'Настройки совместимости',
                  hint: null,
                  isEnabled: false,
                  securityId: null,
                  action: '/topology/strategies',
                  items: null
                }
              ]
            }
          ]
        }
      ],
      code: 'main-menu-vertical',
      fullName: null,
      nameEN: null,
      nameRF: null,
      name: null,
      shortName: null,
      removed: false,
      isActual: true,
      version: 1,
      domain: '',
      sessionId: '',
      timestamp: 0,
      uuid: '17c36ecf-05f2-4baf-93ae-9ca73be28da5'
    }
  ],
  total: 2
};
