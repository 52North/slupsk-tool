from wq.db.patterns import serializers as patterns
from .models import Producerinfo, Delivery


class DeliverySerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Delivery
        exclude = ('producerinfo',)
        object_field = 'producerinfo'
        wq_config = {
            'initial': 1,
        }


class ProducerinfoSerializer(patterns.AttachedModelSerializer):
    deliverys = DeliverySerializer(many=True, required=False)

    class Meta:
        model = Producerinfo
        fields = "__all__"
