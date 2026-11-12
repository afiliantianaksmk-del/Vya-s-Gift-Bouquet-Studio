// NOMOR WHATSAPP TOKO
const whatsappNumber = "6281365597592";

// DATA PRODUK BUKET
const products = [
    {
        name: "Sweet Flower Bouquet",
        category: "Buket Bunga",
        description: "Buket bunga cantik untuk orang tersayang.",
        image: "gambar/e1507db4247c9a777c9d0dd30aa1042c.jpg",
        prices: {
            Small: 85000,
            Medium: 100000,
            Large: 120000
        }
    },

 {
        name: "Sweet Flower Bouquet",
        category: "Buket Bunga",
        description: "Buket bunga cantik untuk orang tersayang.",
        image: "gambar/517c1a17164e2f5e396ddeb5e7fe128a.jpg",
        prices: {
            Small: 85000,
            Medium: 100000,
            Large: 120000
        }
    },
    {
        name: "Sweet Flower Bouquet",
        category: "Buket Bunga",
        description: "Buket bunga cantik untuk orang tersayang.",
        image: "gambar/1ae4ebafcbc3ec7b8938f16d04222e89.jpg",
        prices: {
            Small: 85000,
            Medium: 100000,
            Large: 120000
        }
    },

        
    {
        name: "Graduation Bouquet",
        category: "Buket Wisuda",
        description: "Hadiah spesial untuk merayakan kelulusan.",
        image: "gambar/7a72bf11fdc2f59484c0e0e3559e9d65.jpg",
        prices: {
            Small: 90000,
            Medium: 110000,
            Large: 130000
        }
    },
         {
        name: "Graduation Bouquet",
        category: "Buket Wisuda",
        description: "Hadiah spesial untuk merayakan kelulusan.",
        image: "gambar/7c2e8af7c168f4098ba5b3d04517dd5f.jpg",
        prices: {
            Small: 90000,
            Medium: 110000,
            Large: 130000
        }
    },

    {
        name: "Elegant Custom Bouquet",
        category: "Buket Custom",
        description: "Buket cantik sesuai keinginan pelanggan.",
        image: "gambar/dab894005d77458a84a951962c95b700.jpg",
        prices: {
            Small: 100000,
            Medium: 125000,
            Large: 150000
        }
    },

    {
        name: "Elegant Custom Bouquet",
        category: "Buket Custom",
        description: "Buket cantik sesuai keinginan pelanggan.",
        image: "gambar/bd6c8b2392cad51705e6114ed8b30807 (1).jpg",
        prices: {
            Small: 100000,
            Medium: 125000,
            Large: 150000
        }
    },
        {
        name: "Elegant Custom Bouquet",
        category: "Buket Custom",
        description: "Buket cantik sesuai keinginan pelanggan.",
        image: "gambar/6b17240d3e7d2c3aef695f2677c304fa.jpg",
        prices: {
            Small: 100000,
            Medium: 125000,
            Large: 150000
        }
    },
     {
        name: "Elegant Custom Bouquet",
        category: "Buket Custom",
        description: "Buket cantik sesuai keinginan pelanggan.",
        image: "gambar/c98fc53e7433d21c0fbb8f21300b7cf3.jpg",
        prices: {
            Small: 100000,
            Medium: 125000,
            Large: 150000
        }
    },
     {
        name: "Elegant Custom Bouquet",
        category: "Buket Custom",
        description: "Buket cantik sesuai keinginan pelanggan.",
        image: "gambar/d3279fe7faebf1d10f30d48dfcf2922c.jpg",
        prices: {
            Small: 100000,
            Medium: 125000,
            Large: 150000
        }
    },

    {
        name: "Elegant Custom Bouquet",
        category: "Buket Custom",
        description: "Buket cantik sesuai keinginan pelanggan.",
        image: "gambar/f416ed8c160a4c6c80132c8a9b025101.jpg",
        prices: {
            Small: 100000,
            Medium: 125000,
            Large: 150000
        }
    }
        
];

// FORMAT HARGA RUPIAH
function formatRupiah(harga) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(harga);
}

// TAMPILKAN PRODUK
const productGrid = document.getElementById("productGrid");

function tampilkanProduk(kategori = "Semua") {
    if (!productGrid) return;

    const produkTerpilih = kategori === "Semua"
        ? products
        : products.filter(product => product.category === kategori);

    productGrid.innerHTML = "";

    produkTerpilih.forEach(product => {
        const index = products.indexOf(product);

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p class="product-category">${product.category}</p>

            <label for="size-${index}">
                Pilih Ukuran Buket:
            </label>

            <select
                id="size-${index}"
                class="size-select"
            >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>

            <div class="price" id="price-${index}">
                ${formatRupiah(product.prices.Small)}
            </div>

            <button
                class="order-btn"
                id="order-${index}"
            >
                Pesan Sekarang
            </button>
        `;

        productGrid.appendChild(card);

        // EVENT PERUBAHAN UKURAN
        const sizeSelect = document.getElementById(`size-${index}`);

        sizeSelect.addEventListener("change", function () {
            changePrice(index);
        });

        // EVENT TOMBOL PESAN
        document.getElementById(`order-${index}`)
            .addEventListener("click", function () {
                orderProduct(index);
            });
    });

    // JUMLAH PRODUK
    const productCount = document.getElementById("productCount");

    if (productCount) {
        productCount.textContent =
            `${produkTerpilih.length} produk tersedia`;
    }
}

// UBAH HARGA BERDASARKAN UKURAN
function changePrice(index) {
    const selectedSize =
        document.getElementById(`size-${index}`).value;

    const selectedProduct = products[index];

    const price = selectedProduct.prices[selectedSize];

    document.getElementById(`price-${index}`).textContent =
        formatRupiah(price);
}

// PESAN MELALUI WHATSAPP
function orderProduct(index) {
    const product = products[index];

    const selectedSize =
        document.getElementById(`size-${index}`).value;

    const price = product.prices[selectedSize];

    const message =
        `Halo Vya's Gift, saya ingin memesan buket:\n\n` +
        `Nama Buket: ${product.name}\n` +
        `Kategori: ${product.category}\n` +
        `Ukuran: ${selectedSize}\n` +
        `Harga: ${formatRupiah(price)}\n\n` +
        `Terima kasih.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

// FILTER KATEGORI
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const kategori = this.dataset.filter;

        tampilkanProduk(kategori);
    });
});

// TAMPILKAN PRODUK SAAT HALAMAN DIBUKA
tampilkanProduk();