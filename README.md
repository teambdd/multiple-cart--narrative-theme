# Narrative Theme - Add multiple cart with permalink

# Indonesia version
PENTING! Ini adalah tutorial lanjutan dan tidak didukung oleh Shopify. Pengetahuan tentang bahasa desain web seperti HTML, CSS, JavaScript, dan Liquid diperlukan. dan ingat 'do with your own risk'. happy coding! :)

> modifikasi ini bertujuan untuk menambahkan product lebih dari 1 sayangnya ini masih dengan sistem manual belum bisa otomatis, mungkin lain waktu akan ada perubahan kembali untuk kustomtasi ini.

> Untuk menambahkan modifikasi ini diperlukan beberapa perubahan, untuk tema lain bisa disesuaikan dengan file dibawah ini 
   file yang harus kita modifikasi adalah :
   1. product-template.liquid
   2. theme.js

### Instalasi
- Buat button add to cart baru, dibawah button add to cart yang sebelumnya, seperti ini.  

    ```
    <button type="submit" name="add" {% unless current_variant.available %} aria-disabled="true"{% endunless %} aria-label="{% unless current_variant.available %}{{ 'products.product.sold_out' | t }}{% else %}{{ 'products.product.add_to_cart' | t }}{% endunless %}" class="btn product-form__cart-submit{% if section.settings.enable_payment_button %} btn--secondary-accent{% endif %}" data-add-to-cart>
    	<span data-add-to-cart-text>
    		{% unless current_variant.available %}
    			{{ 'products.product.sold_out' | t }}
    		{% else %}
                {{ 'products.product.add_to_cart' | t }}
             {% endunless %}
    	</span>
    	<span class="hide" data-loader>
    		{% render 'icon-spinner' %}
    	</span>
    </button>
    
    <a href="" class="btn atc-custom">ADD TO CART</a>
    ```

- Selanjutnya, kita harus mengubah / menambahkan attribut id pada option di class single-option-selector, seperti ini.

    ``` 
    <option value="{{ value | escape }}"{% if option.selected_value == value %} selected="selected"{% endif %} id="{% for variant in product.variants %}{% if variant.title ==  value %}{{ variant.id }}{% endif %}{% endfor %}">{{ value }}</option>
    ```
- lalu buka file theme.js dan tambahkan kode javascript ini dipaling bawah

    ```
    var length_selector = $('.single-option-selector').length;
    if(length_selector > 0 ){
    	$(".single-option-selector").change(function () {
        		var variant_id = "";
    		$( ".single-option-selector option:selected" ).each(function() {
    			variant_id += $(this).attr('id');
    		});
        		var result = "/cart/add?id[]="+variant_id+"&id[]=(variant_id)";
        		$('.atc-custom').attr('href', result);
    	}).change();
    }
    else{
    	var variant_id = $('.product-form__master-select.supports-no-js option').val();
       	var result = "/cart/add?id[]="+variant_id+"&id[]=(variant_id)";
       	$('.atc-custom').attr('href', result);
    }
    ```
- simpan semua dan selamat penambahan multiple cart sudah selesai

> Jika mempunyai pertanyaan seputar modifikasi ini, silahkan email ke aditya@bolehdicoba.com

# English Version

IMPORTANT! This is an advanced tutorial and is not supported by Shopify. Knowledge of web design languages such as HTML, CSS, JavaScript, and Liquid is required.

> This modification aims to add more than 1 product, unfortunately this is still a manual system that cannot be automated, maybe another time there will be a change back to this customization.

> To add this modification some changes are needed, for other themes can be adjusted with the file below.
The file that we have to modify is :
1. product-template.liquid
2. theme.js

### Installation

- Open product-template.liquid and create a new add to cart button, under the previous add to cart button, like this.

    ```
    <button type="submit" name="add" {% unless current_variant.available %} aria-disabled="true"{% endunless %} aria-label="{% unless current_variant.available %}{{ 'products.product.sold_out' | t }}{% else %}{{ 'products.product.add_to_cart' | t }}{% endunless %}" class="btn product-form__cart-submit{% if section.settings.enable_payment_button %} btn--secondary-accent{% endif %}" data-add-to-cart>
    	<span data-add-to-cart-text>
    		{% unless current_variant.available %}
    			{{ 'products.product.sold_out' | t }}
    		{% else %}
                {{ 'products.product.add_to_cart' | t }}
             {% endunless %}
    	</span>
    	<span class="hide" data-loader>
    		{% render 'icon-spinner' %}
    	</span>
    </button>
    
    <a href="" class="btn atc-custom">ADD TO CART</a>
    ```
    
- Next, we have to change / add the id attribute to the button in the single-option-selector class, like this.
 
    ``` 
    <option value="{{ value | escape }}"{% if option.selected_value == value %} selected="selected"{% endif %} id="{% for variant in product.variants %}{% if variant.title ==  value %}{{ variant.id }}{% endif %}{% endfor %}">{{ value }}</option>
    ```
    
- then open the theme.js file and add the javascript code at the bottom

    ```
    var length_selector = $('.single-option-selector').length;
    if(length_selector > 0 ){
    	$(".single-option-selector").change(function () {
        		var variant_id = "";
    		$( ".single-option-selector option:selected" ).each(function() {
    			variant_id += $(this).attr('id');
    		});
        		var result = "/cart/add?id[]="+variant_id+"&id[]=(variant_id)";
        		$('.atc-custom').attr('href', result);
    	}).change();
    }
    else{
    	var variant_id = $('.product-form__master-select.supports-no-js option').val();
       	var result = "/cart/add?id[]="+variant_id+"&id[]=(variant_id)";
       	$('.atc-custom').attr('href', result);
    }
    ```

- save all and congratulations on adding multiple carts

> If you have questions about this modification, please contact to aditya@bolehdicoba.com
