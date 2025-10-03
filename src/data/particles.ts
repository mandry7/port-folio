import { type ISourceOptions } from "@tsparticles/engine";

export const Options: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "",
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  clear: true,
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: ["push", "attract"],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: true,
        mode: ["grab", "bubble"],
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: false,
      },
    },
    modes: {
      trail: {
        delay: 0.005,
        pauseOnStop: true,
        quantity: 5,
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 100,
              sync: true,
            },
          },
          collisions: {
            enable: false,
          },
          links: {
            enable: false,
          },
          move: {
            outModes: {
              default: "destroy",
            },
            speed: 2,
          },
          size: {
            value: {
              min: 1,
              max: 5,
            },
            animation: {
              enable: true,
              speed: 5,
              sync: true,
              startValue: "min",
              destroy: "max",
            },
          },
        },
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
    },
  },
  manualParticles: [],
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: "#EAB380",
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    links: {
      enable: true,
      distance: 100,
      color: "random",
      opacity: 0.4,
      width: 1,
      triangles: {
        enable: true,
        color: "#EAB308",
        opacity: 0.09,
      },
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      outModes: "out",
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [
    {
      maxWidth: 1024,
      options: {
        particles: {
          number: { value: 40 },
          move: { speed: 3 },
        },
      },
    },
    {
      maxWidth: 768,
      options: {
        interactivity: {
          events: { onHover: { enable: false }, onClick: { enable: false } },
        },
        particles: {
          number: { value: 24 },
          links: { enable: true, distance: 80, opacity: 0.35 },
          move: { speed: 2 },
        },
      },
    },
    {
      maxWidth: 480,
      options: {
        interactivity: {
          events: { onHover: { enable: false }, onClick: { enable: false } },
        },
        particles: {
          number: { value: 16 },
          links: { enable: true, distance: 60, opacity: 0.3 },
          move: { speed: 1.2 },
        },
      },
    },
  ],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
};
