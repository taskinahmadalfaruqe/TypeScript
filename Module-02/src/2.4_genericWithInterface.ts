{
  // Generic Interface for Name & Mobile
  interface GenericType<T, Y> {
    Name: T;
    Mobile: Y;
  }

  const data: GenericType<string, number> = {
    Name: "Taskin",
    Mobile: 242910701126,
  };

  // Interfaces for Desktop and SmartWatch
  interface DesktopSpace {
    processor: string;
    ram: string;
    storage: string;
  }

  interface SmartWatchSpace {
    connectivity: string;
    batteryLife: string;
  }

  interface DesktopData {
    brand: string;
    model: string;
    space: DesktopSpace;
  }

  interface SmartWatchData {
    brand: string;
    model: string;
    specs: SmartWatchSpace;
  }

  // Generic Data Holder
  interface GenericDataArray<T> {
    name: T;
    Desktop: DesktopData;
    SmartWatch: SmartWatchData;
    haveBike: boolean;
  }

  const ReachDeveloper: GenericDataArray<string> = {
    name: "Taskin Ahmad Al faruqe",
    Desktop: {
      brand: "Dell",
      model: "XPS 13",
      space: {
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD",
      },
    },
    SmartWatch: {
      brand: "Apple",
      model: "Series 7",
      specs: {
        connectivity: "Bluetooth",
        batteryLife: "18 hours",
      },
    },
    haveBike: true,
  };

  // Developer
  interface Developer<T, Y = null> {
    name: string;
    age: number;
    desktop: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smatWatch: T;
    bike?: Y;
  }

  interface SmartWatch {
    brand: string;
    model: string;
    releaseYear: number;
  }

  const poorDeveloper: Developer<SmartWatch> = {
    name: "Taskin",
    age: 25,
    desktop: {
      brand: "Dell",
      model: "XPS 13",
      releaseYear: 2020,
    },
    smatWatch: {
      brand: "Apple",
      model: "Series 7",
      releaseYear: 2021,
    },
  };

  interface smartWatchFeacture extends SmartWatch {
    heartReat: boolean;
    waterResistant: boolean;
  }
  interface Bike {
    model: string;
    brand: string;
    cc: number;
    releaseYear: number;
  }
  const rechDeveloper: Developer<smartWatchFeacture, Bike> = {
    name: "Taskin",
    age: 25,
    desktop: {
      brand: "Dell",
      model: "XPS 13",
      releaseYear: 2020,
    },
    smatWatch: {
      brand: "Apple",
      model: "Series 7",
      releaseYear: 2021,
      heartReat: true,
      waterResistant: true,
    },
    bike: {
      model: "ninja H2R",
      brand: "Kawasaki",
      cc: 998,
      releaseYear: 2021,
    },
  };
}
