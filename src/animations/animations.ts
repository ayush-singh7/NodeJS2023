import { animate, group, query, sequence, stagger, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation =
    trigger('routeFadeIn', [
        transition('* <=> *', [
            style({
                opacity: 0
            }),
            animate('0.5s', style({
                opacity: 1
            }))
        ])
    ])

export const fadeInOut =
    trigger('fadeIn', [
        transition(':enter', [
            style({
                opacity: 0
            }),
            animate('0.5s', style({
                opacity: 1
            }))
        ])
    ])

export const enterTransition = transition(':enter', [
    style({
      opacity: 0.2,
      marginTop:'-50vh'
    }),
    animate('0.4s ease-in', 
    style({ opacity: 1,marginTop:'0' })),
]);
  
export const DropDownAnimation = trigger("dropDownMenu", [
    transition(":enter", [
      style({ height: 0, overflow: "hidden" }),
      query(".menu-item", [
        style({ opacity: 0, transform: "translateY(-50px)" })
      ]),
      sequence([
        animate("200ms", style({ height: "*" })),
        query(".menu-item", [
          stagger(-50, [
            animate("400ms ease", style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ]),
  
    transition(":leave", [
      style({ height: "*", overflow: "hidden" }),
      query(".menu-item", [style({ opacity: 1, transform: "none" })]),
      sequence([
        query(".menu-item", [
          stagger(50, [
            animate(
              "400ms ease",
              style({ opacity: 0, transform: "translateY(-50px)" })
            )
          ])
        ]),
        animate("200ms", style({ height: 0 }))
      ])
    ])
  ]);


  
  export const DropDownAnimation2 = trigger("dropDownMenu", [
    transition(":enter", [
      style({ height: 0, overflow: "hidden" }),
      query(".menu-item", [
        style({ opacity: 0, transform: "translateY(-50px)" })
      ]),
      sequence([
        animate("200ms", style({ height: "*" })),
        query(".menu-item", [
          stagger(-50, [
            animate("400ms ease", style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ]),
  
    transition(":leave", [
      style({ height: "*", overflow: "hidden" }),
      query(".menu-item", [style({ opacity: 1, transform: "none" })]),
      sequence([
        query(".menu-item", [
          stagger(50, [
            animate(
              "400ms ease",
              style({ opacity: 0, transform: "translateY(-50px)" })
            )
          ])
        ]),
        animate("200ms", style({ height: 0 }))
      ])
    ])
  ]);
  